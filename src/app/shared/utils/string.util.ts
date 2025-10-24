/**
 * String utilities for ID generation and string manipulation
 * @fileoverview Provides utilities for generating unique identifiers and string operations
 */

import { v4 as uuidv4 } from 'uuid';

/**
 * Generate a unique ID using UUID v4
 * @returns A unique identifier string in UUID v4 format
 * @example
 * ```typescript
 * const id = generateId(); // "550e8400-e29b-41d4-a716-446655440000"
 * console.log(id); // Random UUID v4 string
 * ```
 */
export function generateId(): string {
  return uuidv4();
}
