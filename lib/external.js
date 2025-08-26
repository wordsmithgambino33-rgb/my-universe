
export async function getMediumArticles() {
  const Parser = require('rss-parser');
  const parser = new Parser({
    customFields: {
      item: ['link', 'title', 'pubDate'], // Explicitly map required fields
    },
  });
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@wordsmithgambino33');
    if (!feed || !feed.items || feed.items.length === 0) {
      console.warn('No articles found in Medium feed.');
      return [];
    }
    return feed.items.map(item => ({
      title: item.title || 'Untitled Article',
      link: item.link,
      pubDate: item.pubDate || new Date().toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching Medium articles:', error.message);
    return [];
  }
}