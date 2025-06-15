
# 🚀 Instalación y ejecución del proyecto (Django + DaisyUI)

Sigue los pasos a continuación para levantar el entorno de desarrollo:

## 🔧 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

## 🐍 2. Crear y activar entorno virtual

```bash
python3 -m venv env
source env/bin/activate  # En Windows: env\Scripts\activate
```

## 📦 3. Instalar dependencias de Python

```bash
pip install -r requirements.txt
```

## 📦 4. Instalar dependencias de Node.js

```bash
npm install
```

## 🎨 5. Compilar TailwindCSS con DaisyUI en modo observación

```bash
npx tailwindcss -i ./static/input.css -o ./static/output.css --watch
```

> Asegúrate de que el archivo `input.css` contenga las directivas de Tailwind:
> ```css
> @tailwind base;
> @tailwind components;
> @tailwind utilities;
> ```

## 🎨 6. Cambiar el tema de DaisyUI (opcional)

Puedes personalizar el tema modificando el archivo `tailwind.config.js`.  
Ejemplo para usar el tema `acid`:

```js
daisyui: {
  themes: ['acid'],
},
```

> Puedes consultar más temas disponibles en la documentación oficial de DaisyUI:  
> https://daisyui.com/docs/themes/

## 🧩 7. Aplicar migraciones

```bash
python manage.py migrate
```

## ⚙️ 8. Ejecutar el servidor de desarrollo

```bash
python manage.py runserver
```

## ✅ 9. Verifica que funciona

Abre tu navegador y ve a:  
http://127.0.0.1:8000
