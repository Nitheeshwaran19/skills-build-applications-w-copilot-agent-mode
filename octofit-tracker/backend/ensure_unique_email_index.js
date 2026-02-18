# Script to ensure unique index on email field in users collection
# Usage: Run with mongosh after Django migrations and population

// Connect to octofit_db
db = db.getSiblingDB('octofit_db');

// Create unique index on email field in users collection
db.users.createIndex({ "email": 1 }, { unique: true });

print('Unique index on email field created for users collection.');
