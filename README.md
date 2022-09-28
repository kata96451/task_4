Даний застосунок призначений для розробли логіки генерації порядку питань в залежності від отриманих відповідей та її тестування. Після отримання JSON(файл db.json) даних у форматі
[
  {"question": "What is your marital status?", "answers": {"Single": 1, "Married": 2}, "id": 0},
  {"question": "Are you planning on getting married next year?", "answers": {"Yes": -1, "No": -1}, "id": 1},
  {"question": "How long have you been married?", "answers": {"Less than a year": -1, "More than a year": 3}, "id": 2},
  {"question": "Have you celebrated your one year anniversary?", "answers": {"Yes": -1, "No": -1}, "id": 3}
]

функція test перебирає усі можливі варианти комбінацій питаннь та відповідей та записує їх у масив list. Далі дані після обробки записуються у новий файл result.json

Для використання цього додатка після встановлення даних файлу локально потрібно:
1. у терміналі запустити команду npm i
2. запустити додаток у середовищі node.js. Для цього можна використати одну с наведених команд:
  - node app.js
  - npx nodemon app.js
  - npm run watch
