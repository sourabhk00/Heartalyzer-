# 💖 Love Score Calculator

## Table of Contents
- [Overview](#overview)
- [How the Love Score Works](#how-the-love-score-works)
  - [1. Reply Time](#1-reply-time)
  - [2. Emoji Usage](#2-emoji-usage)
  - [3. Message Balance](#3-message-balance)
  - [4. Activity Consistency](#4-activity-consistency)
  - [5. Base Score & Final Calculation](#5-base-score--final-calculation)
- [Example Calculation](#example-calculation)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Customization & Extensibility](#customization--extensibility)
- [About the Author](#about-the-author)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Contact](#contact)

---

## Overview

The **Love Score Calculator** is a comprehensive algorithm designed to quantify the romantic potential and "chemistry" in chat conversations. By evaluating multiple dimensions of a conversation—including speed of replies, emotional expressiveness, conversational balance, and activity regularity—the algorithm generates a Love Score from **0 to 100%**.

This playful but insightful metric is perfect for dating apps, relationship analytics platforms, chatbots, or anyone interested in understanding and improving their digital relationships.

Designed and thoroughly documented by [Sourabh Kumar](https://github.com/sourabhk00), this project blends behavioral analysis with fun, actionable feedback. The algorithm is built for clarity, extensibility, and real-world impact.

---

## How the Love Score Works

The Love Score is calculated using five main factors. Each factor contributes (positively or negatively) to the overall score, which always starts from a base value. The final score is capped between 0 and 100.

### 1. Reply Time

**Measures how quickly participants respond to each other.**

- **Very fast replies (<2 min):** +25 points  
  *Indicates high interest, enthusiasm, and engagement. Fast replies often suggest a strong desire to keep the conversation flowing and the relationship moving forward.*
- **Fast replies (<5 min):** +15 points  
- **Good replies (<10 min):** +10 points  
- **Okay replies (<30 min):** +5 points  
- **Slow replies (30+ min):** -15 points  
  *May indicate distraction, lack of interest, or competing priorities. Slow replies can reduce conversational momentum and emotional connection.*

**Why it matters:** Quick replies show attentiveness and prioritization, helping to build trust and excitement in the relationship.

---

### 2. Emoji Usage

**Measures the emotional expressiveness in the conversation.**

- **Lots of emojis (>0.5 per message):** +20 points  
  *High emoji use signals strong emotional investment, playfulness, and a willingness to express feelings openly. Emojis add warmth and personality to chats.*
- **Good amount (>0.2):** +15 points  
- **Some (>0.1):** +10 points  
- **A few (>0.05):** +5 points  

**Why it matters:** Emojis can convey affection, humor, and empathy, transforming text-based chats into lively, emotionally rich exchanges.

---

### 3. Message Balance

**Assesses whether both participants are equally active in the conversation.**

- **Very balanced (>45%/55% split):** +15 points  
  *Represents mutual interest and healthy conversational dynamics. Both sides feel equally heard and valued.*
- **Balanced (>35%):** +10 points  
- **Slightly imbalanced (>25%):** +5 points  
- **Imbalanced (≤25%):** -10 points  
  *One-sided conversations may signal disengagement or a lack of reciprocity, which can hinder relationship growth.*

**Why it matters:** Balanced communication fosters trust, respect, and emotional safety, all of which are critical for lasting relationships.

---

### 4. Activity Consistency

**Measures how regularly the chat is active over time.**

- **Very consistent (>80% of days active):** +15 points  
  *Indicates strong ongoing interest and a healthy habit of staying in touch. Consistency helps maintain emotional connection and momentum.*
- **Consistent (>50%):** +10 points  
- **Somewhat consistent (>30%):** +5 points  

**Why it matters:** Frequent and regular communication is a cornerstone of relationship building, especially in the digital age.

---

### 5. Base Score & Final Calculation

- **Base Score:** All chats start at 50 points.
- **Total Score:** Add or subtract points from the above categories.
- **Final Score:** Clamp the value between 0 (minimum) and 100 (maximum).

**Interpretation:**  
- **High Love Score (80–100):** Fast, balanced, emoji-rich, and regular conversations—hallmarks of a thriving relationship!
- **Medium Love Score (50–79):** Decent romantic potential, but could benefit from more engagement or expressiveness.
- **Low Love Score (<50):** Indicates areas needing improvement, such as responsiveness, balance, or frequency.

---

## Example Calculation

Suppose a chat exhibits:
- **Reply Time:** Replies in 3 minutes → +15 points
- **Emoji Usage:** 0.25 emojis per message → +15 points
- **Message Balance:** 48%/52% split → +15 points
- **Activity Consistency:** Active 60% of days → +10 points
- **Base Score:** 50 points

**Calculation:**  
50 (base)  
+ 15 (reply)  
+ 15 (emoji)  
+ 15 (balance)  
+ 10 (consistency)  
= **105** → Final Love Score: **100** (capped at 100)

---

## Key Features

- **Multi-faceted Analysis:** Evaluates both behavioral and emotional aspects of communication.
- **Easy Integration:** Can be used as an algorithm in apps, bots, or standalone analytics tools.
- **Customizable Parameters:** Scoring thresholds and metrics can be adjusted to suit your application's needs.
- **Actionable Feedback:** Provides users with concrete insights and tips to improve their chat dynamics.

---

## Use Cases

- **Dating Apps:** Show users their Love Score to encourage better, more engaging conversations.
- **Chatbots:** Gauge user engagement and conversational tone for improved interactions.
- **Relationship Analytics:** Track and analyze the health of digital relationships for individuals or groups.
- **Social Platforms:** Reward positive communication behaviors or match users based on conversational chemistry.

---

## Customization & Extensibility

You can tailor the Love Score algorithm to your needs:

- **Scoring thresholds:** Adjust point values or time cutoffs to match your community's standards.
- **Additional metrics:** Add new factors such as sentiment analysis, question frequency, word count, or shared interests.
- **Feedback messages:** Provide users with personalized tips or notifications based on their Love Score.

The modular design makes it easy to experiment, extend, or integrate with other analytics systems.

---

## About the Author

**Sourabh Kumar**  
Creator of the Love Score Calculator, passionate about building AI-powered relationship tools, behavioral analytics engines, and chat health systems.

- GitHub Profile: [sourabhk00](https://github.com/sourabhk00)
- Top Projects: [EloraAI](https://github.com/sourabhk00/EloraAI), [Heartalyzer-](https://github.com/sourabhk00/Heartalyzer-), [LIORA.AI](https://github.com/sourabhk00/LIORA.AI), [Biomolecular-AI](https://github.com/sourabhk00/Biomolecular-AI)

Sourabh specializes in designing algorithms that make digital relationships healthier, more engaging, and fun.

---

## License

This project is released under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

## How to Contribute

Want to improve the Love Score Calculator? Contributions are welcome!

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Write your code and tests.
4. Submit a pull request with a clear description of your changes.

You can propose:
- New metrics or scoring ideas.
- Bug fixes and optimizations.
- Documentation improvements.
- Integration examples for popular platforms.

Clear documentation and test coverage are highly appreciated.

---

## Contact

For questions, feature requests, or collaboration opportunities, please open an issue in the repository  
or start a discussion on GitHub.

---

**Discover and nurture the chemistry in your chats—try the Love Score Calculator today!**
