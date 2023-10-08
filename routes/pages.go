package routes

import (
	"net/http"
	"text/template"

	"github.com/go-chi/chi/v5"
)

type Content struct {
  Page string
}

func PagesRouter(r chi.Router) {
  tmpl, err := template.ParseGlob("templates/*.html")
  if err != nil {
    panic(err)
  }

  // About us page: Vision statement
  r.Get("/", func (w http.ResponseWriter, r *http.Request) {
    tmpl.ExecuteTemplate(w, "layout.html", Content{"index"})
  })

  // Ministries page: Weekly meetings, small groups, retreats
  r.Get("/ministries", func (w http.ResponseWriter, r *http.Request) {
    tmpl.ExecuteTemplate(w, "layout.html", Content{"ministries"})
  })

  // Committies page: Information about the current committee
  r.Get("/committee", func (w http.ResponseWriter, r *http.Request) {
    tmpl.ExecuteTemplate(w, "layout.html", Content{"committee"})
  })

  // Contacts/Join Us page: Social media handles, local churches
  r.Get("/contact", func (w http.ResponseWriter, r *http.Request) {
    tmpl.ExecuteTemplate(w, "layout.html", Content{"contact"})
  })
}

func visitHomePage(w http.ResponseWriter, r *http.Response) {
  
}

func visitAboutPage(w http.ResponseWriter, r *http.Response) {
  
}

func visitContactPage(w http.ResponseWriter, r *http.Response) {
  
}
