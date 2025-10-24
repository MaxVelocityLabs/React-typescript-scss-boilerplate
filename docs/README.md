# TSDoc Configuration

This project uses TSDoc for generating comprehensive API documentation from TypeScript source code.

## Available Commands

- `yarn docs` - Generate documentation once
- `yarn docs:serve` - Generate documentation in watch mode
- `yarn docs:build` - Generate documentation and show completion message

## Documentation Features

- **Type Safety**: All functions and components are fully typed
- **Examples**: Code examples for all public APIs
- **Categories**: Organized by component type (Components, Hooks, Services, Utils, Types, Constants)
- **Search**: Full-text search across all documentation
- **Source Links**: Direct links to source code on GitHub

## Writing TSDoc Comments

### Basic Function Documentation
```typescript
/**
 * Generate a unique ID using UUID v4
 * @param prefix - Optional prefix for the ID
 * @returns A unique identifier string
 * @example
 * ```typescript
 * const id = generateId('user-'); // "user-550e8400-e29b-41d4-a716-446655440000"
 * ```
 */
export function generateId(prefix?: string): string {
  return `${prefix || ''}${uuidv4()}`;
}
```

### Component Documentation
```typescript
/**
 * Button component with customizable variants
 * @component
 * @param props - Component props
 * @param props.variant - Button style variant
 * @param props.children - Button content
 * @returns JSX element
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = ({ variant, children, ...props }: ButtonProps) => {
  // Component implementation
};
```

### Interface Documentation
```typescript
/**
 * User data structure
 * @interface
 */
export interface User {
  /** Unique user identifier */
  id: string;
  /** User's display name */
  name: string;
  /** User's email address */
  email: string;
  /** Account creation timestamp */
  createdAt: Date;
}
```

## Documentation Categories

- **Components**: React components and UI elements
- **Hooks**: Custom React hooks
- **Services**: API services and external integrations
- **Utils**: Utility functions and helpers
- **Types**: TypeScript type definitions and interfaces
- **Constants**: Application constants and configuration
- **Other**: Miscellaneous documentation

## Best Practices

1. **Always document public APIs** - Functions, components, and interfaces that are exported
2. **Include examples** - Show how to use the API with real code examples
3. **Describe parameters** - Use `@param` for function parameters
4. **Describe return values** - Use `@returns` for function return values
5. **Use categories** - Organize related functionality together
6. **Keep it concise** - Documentation should be helpful but not verbose

## Generated Documentation

The documentation is generated in the `docs/` folder and includes:

- **Index page** with project overview
- **Module pages** for each source file
- **API reference** for all exported functions and components
- **Search functionality** to find specific APIs
- **Source code links** for easy navigation

## Integration with Development

- **IDE Support**: TSDoc comments provide IntelliSense in VS Code
- **Type Safety**: Documentation is checked against actual TypeScript types
- **Automated Generation**: Documentation updates automatically when code changes
- **Version Control**: Documentation can be committed alongside source code
