![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Telephone Validator](https://img.shields.io/badge/Telephone_Validator-0A0A23?style=for-the-badge&logo=freecodecamp&logoColor=white)

An old project build back in 2024 as the start of my journey and posted here to preserve my path.

A US telephone number validator application — the third project in FreeCodeCamp's JavaScript Algorithms and Data Structures certification. Validates US phone numbers in various formats, with optional country code (must be 1) and proper area code requirements.

The project only consists of **JavaScript** + **HTML** + **CSS** and was made as a part of FreeCodeCamp's JavaScript Algorithms and Data Structures course.

---

## 📋 Project Requirements

This project fulfills all **34 user stories** from FreeCodeCamp's "Build a Telephone Number Validator" challenge:

<details>
<summary><b>Click to expand the full requirements</b></summary>

<br>

**User Stories:**
- [x] `input` element with `id="user-input"`
- [x] `button` element with `id="check-btn"`
- [x] `button` element with `id="clear-btn"`
- [x] `div`, `span`, or `p` element with `id="results-div"`
- [x] Empty input + check → alert: `"Please provide a phone number"`
- [x] Clicking `#clear-btn` clears `#results-div`
- [x] `1 555-555-5555` → `"Valid US number: 1 555-555-5555"`
- [x] `1 (555) 555-5555` → `"Valid US number: 1 (555) 555-5555"`
- [x] `5555555555` → `"Valid US number: 5555555555"`
- [x] `555-555-5555` → `"Valid US number: 555-555-5555"`
- [x] `(555)555-5555` → `"Valid US number: (555)555-5555"`
- [x] `1(555)555-5555` → `"Valid US number: 1(555)555-5555"`
- [x] `555-5555` → `"Invalid US number: 555-5555"`
- [x] `5555555` → `"Invalid US number: 5555555"`
- [x] `1 555)555-5555` → `"Invalid US number: 1 555)555-5555"`
- [x] `1 555 555 5555` → `"Valid US number: 1 555 555 5555"`
- [x] `1 456 789 4444` → `"Valid US number: 1 456 789 4444"`
- [x] `123**&!!asdf#` → `"Invalid US number: 123**&!!asdf#"`
- [x] `55555555` → `"Invalid US number: 55555555"`
- [x] `(6054756961)` → `"Invalid US number: (6054756961)"`
- [x] `2 (757) 622-7382` → `"Invalid US number: 2 (757) 622-7382"`
- [x] `0 (757) 622-7382` → `"Invalid US number: 0 (757) 622-7382"`
- [x] `-1 (757) 622-7382` → `"Invalid US number: -1 (757) 622-7382"`
- [x] `2 757 622-7382` → `"Invalid US number: 2 757 622-7382"`
- [x] `10 (757) 622-7382` → `"Invalid US number: 10 (757) 622-7382"`
- [x] `27576227382` → `"Invalid US number: 27576227382"`
- [x] `(275)76227382` → `"Invalid US number: (275)76227382"`
- [x] `2(757)6227382` → `"Invalid US number: 2(757)6227382"`
- [x] `2(757)622-7382` → `"Invalid US number: 2(757)622-7382"`
- [x] `555)-555-5555` → `"Invalid US number: 555)-555-5555"`
- [x] `(555-555-5555` → `"Invalid US number: (555-555-5555"`
- [x] `(555)5(55?)-5555` → `"Invalid US number: (555)5(55?)-5555"`
- [x] `55 55-55-555-5` → `"Invalid US number: 55 55-55-555-5"`
- [x] `11 555-555-5555` → `"Invalid US number: 11 555-555-5555"`

</details>

**All tests passed** ✅

---

## 🎨 About the Project

The project that is heavy on regex. So it was a tough one back then. And even right now I'd google to check how to properly apply it. I remember staring at regex patterns for hours, testing one format after another, googling, watching videos just to pass the requirments. But styling it with CSS was so much fun! And the phone design actually turned out looking like a phone? I still love all the CSS I did in this course.

| **Telephone Number Validator Preview** |
|---|
| ![Page Gif](./public/demo.gif) |

<div align="right"><i>submitted to FreeCodeCamp on Nov 23, 2024</i></div>

---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/demo-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://rue-eru.github.io/FCC-JS-3-telephone-number-validator/)
---

| My official [FreeCodeCamp JavaScript Algorithms and Data Structures Certificate](https://www.freecodecamp.org/certification/fcc058fd235-9bca-44b6-b085-10ee4a9bdda6/javascript-algorithms-and-data-structures-v8) |
|---|
| ![Certificate](./public/JavaScript-Algorithms-and-Data-Structures.png) |

