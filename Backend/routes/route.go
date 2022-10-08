package route

import (
	"Api/Backend/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.POST("/api/register", controllers.Register())
}
