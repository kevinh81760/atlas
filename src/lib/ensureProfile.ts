import { supabase } from "./supabaseClient";

export const ensureProfile = async (fullName?: string) => {
    
    // Finds out who is logged in
    const { data, error } = await supabase.auth.getUser();
    if (error) {
        throw error;
    }
    const user = data.user;

    // If the user is not found, throw an error
    if (!data.user) {
        throw new Error("User not found");
    }

    // Gets the display name of the user - use provided fullName or fallback to email-based name
    const display_name = fullName || user.email?.split("@")[0] || "User";

    // Upserts the profile into the database
    const { error: upsertError } = await supabase
        .from("profiles")
        .upsert(
            {
                id: user.id,
                display_name,
                updated_at: new Date().toISOString(),
            },
            { onConflict: "id" }
        );

        if (upsertError) {
            throw upsertError;
        }

        return user.id;
}