/**
 * Generic localStorage utility with type safety
 * @fileoverview Provides type-safe localStorage operations with error handling
 */

/**
 * Generic localStorage utility object with type-safe operations
 * @example
 * ```typescript
 * // Get data with default value
 * const user = storage.get<User>('user', { name: 'Guest' });
 *
 * // Set data
 * storage.set('user', { name: 'John', age: 30 });
 *
 * // Remove data
 * storage.remove('user');
 *
 * // Clear all data
 * storage.clear();
 * ```
 */
export const storage = {
  /**
   * Get data from localStorage with type safety and default value
   * @param key - Storage key
   * @param defaultValue - Default value if key doesn't exist or parsing fails
   * @returns Parsed data or default value
   */
  get<T>(key: string, defaultValue: T): T {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  /**
   * Set data in localStorage with JSON serialization
   * @param key - Storage key
   * @param value - Value to store
   */
  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Silently fail for storage errors
    }
  },

  /**
   * Remove data from localStorage
   * @param key - Storage key to remove
   */
  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // Silently fail for storage errors
    }
  },

  /**
   * Clear all data from localStorage
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch {
      // Silently fail for storage errors
    }
  },
};
