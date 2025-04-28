using Resilience.Debugging;

namespace Resilience;

public class ResilienceConsts
{
    public const string LocalizationSourceName = "Resilience";

    public const string ConnectionStringName = "Default";

    public const bool MultiTenancyEnabled = true;


    /// <summary>
    /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
    /// </summary>
    public static readonly string DefaultPassPhrase =
        DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "37b64fcc7e164ce28d771a7da8ecaf79";
}
