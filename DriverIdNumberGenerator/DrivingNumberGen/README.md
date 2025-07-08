# UK Driving License Number Generator

This project generates a **UK driving license number** using a specific set of rules based on the personal details of an individual. The generated license number is a 16-character string derived from the driver's name, date of birth, and gender.

---

## 📝 Task Description

In the UK, a driving license number is constructed from a person's **name**, **date of birth**, and **gender**, following these specific formatting rules:

### 🔢 License Number Structure (16 Characters)

| Position(s) | Description |
|-------------|-------------|
| 1–5         | First 5 characters of the **surname**, padded with `9`s if less than 5 characters |
| 6           | **Decade digit** of the year of birth (e.g., `8` for 1987) |
| 7–8         | **Month of birth** (01–12). For **females**, add 50 to the value (i.e., 51–62) |
| 9–10        | **Day** of birth |
| 11          | **Year digit** of the year of birth (e.g., `7` for 1987) |
| 12–13       | Initial of the **first name** and **middle name** (use `9` if no middle name) |
| 14          | Arbitrary digit, always `9` in our case |
| 15–16       | Computer check digits, always `"AA"` in our case |

---

## 📥 Input Format

Input is provided as an array:

```js
data = ["John", "James", "Smith", "01-Jan-2000", "M"];
