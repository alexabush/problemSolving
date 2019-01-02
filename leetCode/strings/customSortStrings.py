def customSortString(S, T):
    """
    :type S: str
    :type T: str
    :rtype: str
    """
    result = ""
    for char in S:
        if char in T:
            count = T.count(char)
            result += char * count
            T = T.replace(char, '')
    return result + T


S = "cba"
T = "abcd"

print(customSortString(S,T))