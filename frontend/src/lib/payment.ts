export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const handlePayment = async () => {
  const res = await loadRazorpayScript();

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  // Use the local Flask backend port 5000 (ensure it's running)
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  try {
    const response = await fetch(`${API_URL}/api/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 9900, // 99 INR in paise
        currency: "INR",
        receipt: "receipt_order_" + Date.now(),
      }),
    });

    const orderData = await response.json();

    if (orderData.status !== "success") {
      alert("Failed to create order. Please try again.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_YourKeyIdHere", // Enter the Key ID generated from the Dashboard
      amount: orderData.amount,
      currency: orderData.currency,
      name: "EmbedMastery",
      description: "2-Day Scientific Manifestation Masterclass",
      image: "https://your-logo-url.png",
      order_id: orderData.order_id,
      handler: async function (response: any) {
        const verifyData = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        const verifyRes = await fetch(`${API_URL}/api/verify-payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(verifyData),
        });

        const verifyJson = await verifyRes.json();
        if (verifyJson.status === "success") {
          alert("Payment Successful! Welcome to the Masterclass.");
          // Redirect to success page or show success modal
        } else {
          alert("Payment Verification Failed!");
        }
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#12122b",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error("Payment Error:", error);
    alert("Something went wrong during payment initialization.");
  }
};
