def subtract(minuend, *subtrahends):
    """
    Subtract a series of numbers from a minuend.
    
    :param minuend: The number to subtract from.
    :param subtrahends: The numbers to subtract from the minuend.
    :return: The result of the subtraction.
    :raises ValueError: If subtrahends are empty.
    :createdBy: Furkan Yıldız
    :date: 06.02.2024
    """
    # Check if subtrahends are empty
    if not subtrahends:
        raise ValueError("Subtrahends cannot be empty.")
    
    # Subtract all subtrahends from the minuend
    result = minuend - sum(subtrahends)
    
    return result

# Test
try:
    print(subtract(10, 5, 3))  # Outputs: 2
except ValueError as e:
    print(e)
