export const config = {
  maxDuration: 300, // 5 minutes
};

const TARGET_URL = "https://taho-theta.vercel.app/api/index"; // Replace with your target URL
const CONCURRENCY = 1000; // Keeps total concurrent requests under 29,000
const INTERVAL = 10_000; // 10 seconds

export default function handler(req, res) {
  function fireBatch() {
    for (let i = 0; i < CONCURRENCY; i++) {
      fetch(TARGET_URL).catch(() => {});
    }
  }

  setInterval(fireBatch, INTERVAL);
  fireBatch();

  // Respond after 5 minutes to keep function alive
  setTimeout(() => {
    res.status(200).json({ 
      message: "Cron completed",
      timestamp: new Date().toISOString()
    });
  }, 300000); // 5 minutes
}
