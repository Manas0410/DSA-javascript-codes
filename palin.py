class Solution(object):
    def lengthOfLongestSubstring(self, s):
        if len(s)<2:
            return len(s)
        k=0
        pointer =s[k]
        ar = []
        for i in range(1,len(s)):
            if s[i] not in pointer:
                pointer += s[i]
            else:
                ar.append(pointer)
                k+=1
                pointer=s[k]
                i =k+1
            ar.append(pointer)
        big =0
        for i in ar:
            if len(i)>big:
                big = len(i)
        return big
