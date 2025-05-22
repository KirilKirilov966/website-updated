from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    option = db.Column(db.String(100), nullable=False, unique=True)
    count = db.Column(db.Integer, default=1)
