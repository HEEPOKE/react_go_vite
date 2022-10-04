package main

import (
	// "./database"
	// "./routes"
	"Backend/go_react_vite/database"
	"Backend/go_react_vite/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()

	app := fiber.New()
	routes.Setup(app)

	app.Listen(":3000")
}
