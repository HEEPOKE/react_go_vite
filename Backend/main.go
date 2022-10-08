package main

import (
	// "database"

	"Api/Backend/database"
	route "Api/Backend/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()

	app := fiber.New()
	route.Setup(app)

	app.Listen(":3000")
}
