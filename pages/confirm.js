import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  const { email } = router.query;

  if (!email) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent/10 to-base-100 flex items-center justify-center">
        <p className="text-base-content/80">Invalid confirmation link. Please use the link from your email.</p>
      </div>
    );
  }

  // Simulate confirmation (in production, update a database here)
  const handleConfirm = async () => {
    console.log("Subscription confirmed for:", email);
    // In a real app, you’d call an API to update the subscription status
    alert("Thank you! Your subscription has been confirmed.");
    router.push("/"); // Redirect to homepage after confirmation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 to-base-100 flex items-center justify-center">
      <div className="text-center p-6 bg-base-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4">Confirm Subscription</h2>
        <p className="text-base-content/80 mb-4">Click the button below to confirm your subscription for {email}.</p>
        <button onClick={handleConfirm} className="btn btn-primary">
          Confirm Subscription
        </button>
      </div>
    </div>
  );
};

export default Confirm;