// ============================================================
// FORMSPREE CONFIG
//
// 1. Va sur https://formspree.io et crée un compte gratuit
// 2. Crée 2 formulaires : "Demo" et "Waitlist"
// 3. Remplace les IDs ci-dessous par les tiens
//
// Gratuit : 50 soumissions/mois
// Les soumissions arrivent par email + dashboard Formspree
// ============================================================

export const FORMSPREE_DEMO_ID = 'xyzgvonq'      // ← Remplace par ton ID "Demo"
export const FORMSPREE_WAITLIST_ID = 'xyzgvonq'   // ← Remplace par ton ID "Waitlist"

export async function submitForm(formId: string, data: Record<string, string>) {
  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error('Erreur lors de l\'envoi')
  }

  return res.json()
}
