namespace NQuandt.Functions
{
    public static class StringExtensions 
    {
        public static string AsNullIfWhitespace(this string str)
        {
            return !string.IsNullOrWhiteSpace(str) ? str : null;
        }
    }
}