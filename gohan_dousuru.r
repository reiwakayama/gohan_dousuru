library(googlesheets4)
library(readxl)

gs4_auth()

gohan_dousuru_xlsx<- "C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru.xlsx"
gohan_dousuru_data <- read_excel(gohan_dousuru_xlsx)

gohan_dousuru_ss <- "https://docs.google.com/spreadsheets/d/1k8RUX5ZMyKrev62qlXyP7-7k2rlHIobC4IUbNEn2Z_E/edit?usp=sharing"
sheet_write(gohan_dousuru_data, ss = gohan_dousuru_ss, sheet = "menu") 