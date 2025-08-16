# Viva Demo Checklist

## Pre-demo checks
- [ ] ID card
- [ ] Internet
- [ ] Charger
- [ ] Camera / microphone
- [ ] Read the report and watch the video
- [ ] Turn off Copilot in VS Code
- [ ] Verify Celery task timing

## Start
- Give self-introduction
- Open GitHub repository

## Run the application
1. Unzip project and open in code editor
2. Split terminal into three panes

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python launch_app.py
```

### Frontend
```bash
cd frontend
npm install
# Rename environment file as required (e.g. .env.example -> .env)
# Start dev server(s)
npm run dev
# If needed, run a second instance: npm run dev
```

## Features to demonstrate
- Token-based authentication and RBAC
- Open documentation and show DB schema; explain models and show the database
- Show backend code and frontend app
- Swagger docs & Postman collection; demonstrate auth endpoint

## CRUD flows to show (create / edit / delete)
- Subject
- Chapter
- Quiz
- Questions

## Other functionality
- Search (admin & users)
- Charts & summary pages
- Attempt a quiz end-to-end
- Show scheduled jobs and email functionality
- Show triggered jobs (manual/automatic)
- Cache endpoints via Postman

