def generate_feedback(user_input, ai_response):
    # Placeholder logic - later we can use OpenAI or rules
    if "sorry" in user_input.lower():
        return "You apologized—possibly unnecessarily. Be cautious of guilt-tripping."
    elif "no" in user_input.lower():
        return "Nice! Setting boundaries is key."
    else:
        return "Analyze if you’re being too agreeable or vague. Clarity protects you."