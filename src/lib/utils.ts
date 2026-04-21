import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Helper standard shadcn/ui : merge les classes Tailwind en gérant les conflits.
 * Utilisé par tous les composants de `/components/ui/`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
