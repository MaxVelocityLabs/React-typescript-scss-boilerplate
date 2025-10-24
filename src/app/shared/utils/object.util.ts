/**
 * Object utility functions for common object operations
 * @fileoverview Provides utilities for checking object properties and state
 */

/**
 * Check if an object is empty (has no enumerable properties)
 * @param obj - Object to check
 * @returns true if object is empty, false if it has at least one property
 * @example
 * ```typescript
 * isEmpty({}) // true
 * isEmpty({ name: 'John' }) // false
 * isEmpty([]) // true (empty array)
 * ```
 */
export const isEmpty = (obj: Record<string, unknown>): boolean => {
  return Object.keys(obj).length === 0;
};

/**
 * Check if an object has properties (opposite of isEmpty)
 * @param obj - Object to check
 * @returns true if object has at least one property, false if empty
 * @example
 * ```typescript
 * hasProperties({}) // false
 * hasProperties({ name: 'John' }) // true
 * hasProperties([]) // false (empty array)
 * ```
 */
export const hasProperties = (obj: Record<string, unknown>): boolean => {
  return Object.keys(obj).length > 0;
};
