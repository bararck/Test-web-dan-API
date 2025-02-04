from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Inisialisasi WebDriver
driver = webdriver.Chrome()  # Ganti dengan webdriver yang sesuai jika perlu

try:
    # Buka halaman pendaftaran
    driver.get("https://www.cermati.com/app/gabung")

    # Maksimalkan jendela browser
    driver.maximize_window()

    # Tunggu beberapa detik agar halaman sepenuhnya dimuat
    time.sleep(2)

    # Temukan elemen input dan masukkan data
    mobile_phone_input = driver.find_element(By.ID, "mobilePhone")
    email_input = driver.find_element(By.ID, "email")
    first_name_input = driver.find_element(By.ID, "firstName")
    last_name_input = driver.find_element(By.ID, "lastName")

    # Masukkan data ke dalam form
    mobile_phone_input.send_keys("08123456789")  # Ganti dengan nomor telepon yang valid
    email_input.send_keys("emailanda@example.com")  # Ganti dengan email yang valid
    first_name_input.send_keys("NamaDepan")  # Ganti dengan nama depan
    last_name_input.send_keys("NamaBelakang")  # Ganti dengan nama belakang

    # Tunggu sebentar untuk memastikan semua input terisi
    time.sleep(2)

    # Scroll ke bawah untuk menampilkan CAPTCHA
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)  # Tunggu sebentar setelah scroll

    # Temukan tombol "Daftar" dan klik
    register_button = driver.find_element(By.CSS_SELECTOR, 'button[data-button-name="register-new"]')
    register_button.click()

    # Tunggu beberapa detik agar halaman sepenuhnya dimuat
    time.sleep(10)

    # Scroll ke bawah untuk menampilkan CAPTCHA
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)  # Tunggu sebentar setelah scroll
    
    # Temukan dan klik CAPTCHA
    captcha_checkbox = driver.find_element(By.CSS_SELECTOR, 'label.rc-anchor-checkbox-label')
    captcha_checkbox.click()

    # Tunggu sebentar untuk menyelesaikan CAPTCHA
    time.sleep(5)  # Anda mungkin perlu menyelesaikan CAPTCHA secara manual

    # Temukan tombol "Daftar" dan klik
    register_button = driver.find_element(By.CSS_SELECTOR, 'button[data-button-name="register-new"]')
    
    # Pastikan tombol tidak dalam keadaan disabled sebelum mengklik
    if register_button.is_enabled():
        register_button.click()
    else:
        print("Tombol 'Daftar' tidak dapat diklik (disabled).")

    # Tunggu beberapa detik untuk melihat hasil
    time.sleep(5)

finally:
    # Tutup browser
    driver.quit()