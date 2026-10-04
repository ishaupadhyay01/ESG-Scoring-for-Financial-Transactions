# ESG Scoring for Financial Transactions

Platform that calculates and predicts ESG scores from client payment transactions.

## Structure
- `client/` – React frontend
- `server/` – Node + Express + MongoDB API
- `ml-service/` – FastAPI ML service (NLP, anomalies, forecast)
- `data/` – synthetic data generator and sample CSVs
- `docs/` – API contract and schema

## Git workflow
- No direct pushes to `main`
- Branch names: `feature/step-N-short-name`
- One PR per step, reviewed and merged by the other person
- Commits: `feat:`, `fix:`, `docs:`