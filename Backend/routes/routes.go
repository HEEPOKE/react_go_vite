package routes

import (
	// "../controllers"
	"Backend/go_react_vite/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.POST("/api/register", controllers.Register())
}
