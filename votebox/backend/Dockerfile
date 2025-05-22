FROM python:3.12-slim

# Инсталираме системни зависимости за psycopg2-binary и други
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Създаваме работна директория
WORKDIR /app

# Копираме и инсталираме Python зависимостите
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копираме целия код
COPY . .

# Стартираме приложението
CMD ["python", "app.py"]