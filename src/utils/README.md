# Utils Folder

Centralized utility functions organized by functionality to promote clean code and DRY principles.

## Structure

```
src/utils/
├── project-card-utils.ts      # Project card utilities and animations
├── hero-section-utils.ts      # Hero section utilities and data parsing
├── skills-section-utils.ts    # Skills section utilities and hooks
├── project-section-utils.ts   # Project section utilities and layout
├── certificate-section-utils.ts # Certificate section utilities and layout
├── index.ts                   # Main exports
└── README.md                  # This file
```

## Organization Principles

### 1. **Functionality-Based Grouping**
- **project-card-utils.ts**: Project card animations, link helpers, and validation
- **hero-section-utils.ts**: Hero section data parsing and keyword management
- **skills-section-utils.ts**: Skills section animations, carousel config, and responsive helpers
- **project-section-utils.ts**: Project section animations, layout, and validation
- **certificate-section-utils.ts**: Certificate section animations, layout, and validation

### 2. **Naming Conventions**
- Files are named after their component function (e.g., `project-card-utils.ts`)
- Functions maintain their original names for backward compatibility
- Clear, descriptive names that indicate functionality

### 3. **Import/Export Strategy**
- Each file exports specific functions
- `index.ts` provides centralized access
- Components import from `@/utils` for easy access

## Usage

### Import from centralized utils:
```tsx
import { 
  createAnimationConfig,
  getGridClasses,
  validateProjectSectionData 
} from '@/utils';
```

### Import from specific file:
```tsx
import { createAnimationConfig } from '@/utils/project-section-utils';
```

## Benefits

✅ **Clean Code**: Single responsibility principle for each file  
✅ **DRY**: No duplicate utility functions across components  
✅ **Maintainability**: Easy to find and update utilities  
✅ **Consistency**: Standardized patterns across the codebase  
✅ **Reusability**: Utilities can be shared between components  
✅ **Testing**: Centralized utilities are easier to test  

## Migration Notes

All component utility files have been moved to the centralized utils folder and renamed based on their function. All component imports have been updated to use `@/utils` for backward compatibility.

## Adding New Utilities

1. **Identify the category** (which component the utility belongs to)
2. **Add to appropriate file** or create new file if needed
3. **Export from index.ts** for centralized access
4. **Update component imports** to use centralized utils
