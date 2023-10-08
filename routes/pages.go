package routes

import (
	"net/http"
	"text/template"

	"github.com/go-chi/chi/v5"
)

func PagesRouter(r chi.Router) {
  tmpl, err := template.ParseGlob("templates/*.html")
  if err != nil {
    panic(err)
  }

  // About us page: Vision statement
  r.Get("/", func (w http.ResponseWriter, r *http.Request) {
    tmpl.ExecuteTemplate(w, "index.html", nil)
  })

  // Ministries page: Weekly meetings, small groups, retreats
  r.Get("/ministries", func (w http.ResponseWriter, r *http.Request) {
    tmpl.ExecuteTemplate(w, "ministries.html", nil)
  })

  // Committies page: Information about the current committee
  r.Get("/committee", func (w http.ResponseWriter, r *http.Request) {
    tmpl.ExecuteTemplate(w, "committee.html", nil)
  })

  // Contacts/Join Us page: Social media handles, local churches
  r.Get("/contact", func (w http.ResponseWriter, r *http.Request) {
    tmpl.ExecuteTemplate(w, "contact.html", nil)
  })
}
