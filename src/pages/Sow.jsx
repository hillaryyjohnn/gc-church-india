import { useState } from "react";
import "../styles/pages/sow.css";

function Sow() {
  const [copiedText, setCopiedText] = useState("");

  const copyText = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(`${label} copied`);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (error) {
      setCopiedText("Unable to copy. Please copy manually.");
      setTimeout(() => setCopiedText(""), 2500);
    }
  };

  return (
    <section className="page-section sow-page">
      <div className="page-heading sow-heading">
        <p className="small-title-dark">Partner With the Ministry</p>
        <h1>Sow Into the Ministry</h1>
        <p>
          Your seed helps GC Church India continue the mission of preaching the
          Gospel, conducting crusades, supporting prayer missions, helping the
          needy, and reaching souls for Jesus Christ.
        </p>
      </div>

      {copiedText && <div className="copy-message">{copiedText}</div>}

      <div className="sow-options-grid">
        {/* Apostle Personal Account */}
        <div className="sow-card apostle-card">
          <div className="sow-card-header">
            <span className="sow-tag">QR Available</span>
            <h2>Apostle Personal Support</h2>
            <p>
              Use this section to sow directly to Apostle D. Besto’s personal
              ministry support account.
            </p>
          </div>

          <div className="qr-image-box">
            <img
              src="/sow/apostle-qr.jpeg"
              alt="Apostle D. Besto Personal QR Code"
            />
          </div>

          <div className="upi-detail-box">
            <span>UPI ID</span>
            <strong>bestopeeris1971@okicici</strong>
            <button onClick={() => copyText("bestopeeris1971@okicici", "UPI ID")}>
              Copy
            </button>
          </div>

          <div className="bank-detail-list">
            <h3>Personal Bank Transfer</h3>

            <div className="bank-detail-item">
              <span>Account Name</span>
              <strong>BESTO DHANABALAN PEERIS</strong>
            </div>

            <div className="bank-detail-item">
              <span>Bank Name</span>
              <strong>CANARA BANK</strong>
            </div>

            <div className="bank-detail-item">
              <span>Account Number</span>
              <strong>0109101051488</strong>
              <button onClick={() => copyText("0109101051488", "Account Number")}>
                Copy
              </button>
            </div>

            <div className="bank-detail-item">
              <span>IFSC Code</span>
              <strong>CNRB0015039</strong>
              <button onClick={() => copyText("CNRB0015039", "IFSC Code")}>
                Copy
              </button>
            </div>

            <div className="bank-detail-item">
              <span>Branch</span>
              <strong>MUMBAI MATUNGA BAZAR</strong>
            </div>
          </div>
        </div>

        {/* Church Bank Account */}
        <div className="sow-card church-card">
          <div className="sow-card-header">
            <span className="sow-tag bank-only">Bank Transfer Only</span>
            <h2>Church Ministry Account</h2>
            <p>
              Use this section to sow into the official church ministry account.
              This account is for bank transfer only.
            </p>
          </div>

          <div className="church-bank-highlight">
            <h3>Official Church Bank Details</h3>
            <p>No QR code is available for this account.</p>
          </div>

          <div className="bank-detail-list">
            <div className="bank-detail-item">
              <span>Account Name</span>
              <strong>GUIDE OF CHRIST CHURCH TRUST</strong>
            </div>

            <div className="bank-detail-item">
              <span>Bank Name</span>
              <strong>INDIAN OVERSEAS BANK</strong>
            </div>

            <div className="bank-detail-item">
              <span>Account Number</span>
              <strong>005601000033290</strong>
              <button
                onClick={() => copyText("005601000033290", "Church Account Number")}
              >
                Copy
              </button>
            </div>

            <div className="bank-detail-item">
              <span>IFSC Code</span>
              <strong>IOBA0000056</strong>
              <button onClick={() => copyText("IOBA0000056", "Church IFSC Code")}>
                Copy
              </button>
            </div>

            <div className="bank-detail-item">
              <span>Branch</span>
              <strong>MATUNGA, MUMBAI</strong>
            </div>
          </div>

          <div className="sow-note">
            <strong>Note:</strong> Please verify the account details before
            making payment. After sending your offering, you may share the
            payment screenshot through WhatsApp for confirmation.
          </div>
        </div>
      </div>

      <div className="sow-purpose-section">
        <div className="section-heading center">
          <p className="small-title-dark">Your Seed Supports</p>
          <h2>Ministry Works</h2>
          <p>
            Every contribution becomes a part of the mission to bring souls
            closer to Christ.
          </p>
        </div>

        <div className="sow-purpose-grid">
          <div>Gospel Crusades</div>
          <div>Prayer Ministry</div>
          <div>Village Outreach</div>
          <div>Missionary Support</div>
          <div>Tract Distribution</div>
          <div>Bible Sharing</div>
          <div>Widow Support</div>
          <div>Orphan Care</div>
        </div>
      </div>
    </section>
  );
}

export default Sow;