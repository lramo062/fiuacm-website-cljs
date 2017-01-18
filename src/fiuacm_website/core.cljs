(ns fiuacm-website.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)


;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:org "Association for Computing Machinery"
                          :school "Florida International University"
                          :random-strings   ["American Cheese Monkeys" 
                                             "Amazingly Correct Maps" 
                                             "Awkward Corrupt Manatees" 
                                             "Alien Chocolate Marbles" 
                                             "Association for Calculating Men" 
                                             "All Cheese Museum" 
                                             "Animals Closing Markets" 
                                             "Actual Cool Manerisms" 
                                             "Apparent Chapstick Messes" 
                                             "And Cheese Mac" 
                                             "Angelo Can’t Meme" 
                                             "Annabelle Crayon Monument" 
                                             "Asians Crazy for Mark" 
                                             "Air Creates Magic" 
                                             "Actual Code is a Myth" 
                                             "Amazing Colorful Megaphones" 
                                             "Angelos Creates Megaphones" 
                                             "Act Create Move" 
                                             "Alive Correct Me" 
                                             "Angel’s Copper Memoriam" 
                                             "Alastair`s Chink Men" 
                                             "Alive Chocolate Mannequins" 
                                             "Amazing Coding Memes" 
  ]
                          :events [{:day "27"
                                    :month "Jan"
                                    :title "Machine Learning: Regression"
                                    :subtitle "Introduction to Machine Learning and Regression"
                                    :time "12:00"
                                    :period "PM"
                                    :location "PG6 105"}
                                   
                                   {:day "3"
                                    :month "Feb"
                                    :title "Architectures: Go Mobile with Swift!"
                                    :subtitle "Building iOS apps with Swift -an open-source language"
                                    :time "12:00"
                                    :period "PM"
                                    :location "PG6 105"}
                                   {:day "10"
                                    :month "Feb"
                                    :title "Second General Meeting"
                                    :subtitle "Holy Emacs with Lisp @ Second General Meeting"
                                    :time "12:00"
                                    :period "PM"
                                    :location "PG6 105"}]}))


(defn main-container []
  [:div {:class "main-container"}
   [:p {:id "random_name_generator"}
    (get (:random-strings @app-state) (rand-int 7))]
   [:div {:class "brand"}
    [:div {:class "logo"}
     [:img {:class "responsive-img" :src "/img/logo.png"}]]
    [:h1 {:class "wordmark"} (:org @app-state)]
    [:p {:class "tagline"} (:school @app-state)]]
   [:ul {:class "tabs"}
    [:li {:class "tab-link current" :data-tab "tab-1"} "Events"]
    [:li {:class "tab-link"}
     [:a {:href "https://www.facebook.com/ACMatFIU/"} "Facebook"]]
    [:li {:class "tab-link"}
     [:a {:href "https://orgsync.com/9704/chapter"} "OrgSync"]]]])  
    


(defn events []
  [:div {:id "tab-1" :class "tab-content current"}
   [:div {:class "main-container tab-upcoming"}
    [:h2 {:class "section-header"} "Upcoming Events"]
    [:div {:class "events-wrap"}
     ;; event -- starts here --
     (for [event (:events @app-state)]
     [:div {:class "event"}

      [:div {:class "date"}
       [:div {:class "day"} (get event :day)]
       [:div {:class "month"} (get event :month)]]
      
      [:div {:class "body"}
       [:div {:class "title"} (get event :title)]
       [:div {:class "subtitle"} (get event :subtitle)]]
      
      [:div {:class "time-location"}
       [:div {:class "datetime"}
        [:div {:class "time"} (get event :time)]
        [:div {:class "period"} (get event :period)]]
       
       [:div {:class "location"} (get event :location)]]])]]])
     ;; event -- ends here --
  
(defn compositioner []
  [:div
   [main-container]
   [events]])



(reagent/render-component [compositioner]
                          (. js/document (getElementById "app")))

