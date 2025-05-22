from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Use environment variable or fallback to default
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://voteuser:votepass@db:5432/votebox')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

from models import db, Vote
db.init_app(app)

@app.route("/api/vote", methods=["POST"])
def vote():
    data = request.get_json()
    option = data.get("option")

    if not option:
        return jsonify({"error": "Option not provided"}), 400

    vote = Vote.query.filter_by(option=option).first()
    if vote:
        vote.count += 1
    else:
        vote = Vote(option=option, count=1)
        db.session.add(vote)

    db.session.commit()
    return jsonify({"message": f"Vote for {option} counted."}), 200

@app.route("/api/results", methods=["GET"])
def results():
    votes = Vote.query.all()
    return jsonify({vote.option: vote.count for vote in votes})

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200

# Ensure DB tables exist (useful on first run)
with app.app_context():
    db.create_all()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
