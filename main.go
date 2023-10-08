package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/yong1le/acf-website/routes"
)

func main() {
  r := chi.NewRouter()

  // Server Static Files
  fs := http.FileServer(http.Dir("static/"))
  r.With(authorize).Handle("/static/*", http.StripPrefix("/static/", fs))

  r.Route("/", routes.PagesRouter)
  http.ListenAndServe(":8000", r)
}

// Middleware to make sure user cannot directly static files by URL
func authorize(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    _, ok := r.Header["Referer"]
    if ok {
      next.ServeHTTP(w, r)
    } else  {
      http.Error(w, "Forbidden", http.StatusForbidden)
    }
  })
}
