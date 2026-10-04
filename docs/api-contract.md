# API Contract (draft)

POST /api/upload            – CSV upload
GET  /api/scores            – scored transactions (filters: client, sector, from, to)
GET  /api/trends            – ESG trend, groupBy=month
GET  /api/leaderboard       – clients ranked by ESG score
GET  /api/anomalies         – flagged transactions
GET  /api/forecast          – predicted score for a client
GET  /api/weights           – current E/S/G weights
PUT  /api/weights           – update weights, body: { "E": 0.4, "S": 0.3, "G": 0.3 }