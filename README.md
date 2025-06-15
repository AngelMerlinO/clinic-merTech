python3 -m venv env
source env/bin/activate
npm install
npx tailwindcss -i ./static/input.css -o ./static/output.css --watch
python manage.py runserver
