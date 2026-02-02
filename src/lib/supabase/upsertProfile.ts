import type { SupabaseClient } from "@supabase/supabase-js";

export async function upsertProfile(
  supabase: SupabaseClient,
  input: { id: string; full_name?: string; avatar_url?: string | null }
) {
  const { error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: input.id,
        full_name: input.full_name ?? null,
        avatar_url: input.avatar_url ?? null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );

  if (error) throw error;
}