function Sow() {
  return (
    <section className="page-section">
      <h1>Sow Into the Ministry</h1>

      <p>
        Your seed helps us spread the Gospel, conduct crusades, support prayer
        missions, and reach souls for Christ.
      </p>

      <div className="sow-container">
        <div className="qr-box">
          <h2>Scan and Pay</h2>
          <div className="qr-placeholder">QR Code Here</div>
          <p>UPI ID: yourupi@bank</p>
        </div>

        <div className="bank-box">
          <h2>Bank Account Details</h2>
          <p><strong>Account Name:</strong> GC Church India</p>
          <p><strong>Bank Name:</strong> Your Bank Name</p>
          <p><strong>Account Number:</strong> XXXXX XXXXX</p>
          <p><strong>IFSC Code:</strong> XXXXXXXX</p>
          <p><strong>Branch:</strong> Your Branch</p>
        </div>
      </div>
    </section>
  );
}

export default Sow;