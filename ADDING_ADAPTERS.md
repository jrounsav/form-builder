# Adding new adapters

Follow these steps to add new adapters.

1. Add a new entry to the ExportType enum
2. Add the new enum to the AdapterMap interface
3. make a copy of the formbuilder.ts file and provide a filename appropriate to the adapter.
4. Change the type to the new ExportType enum value
5. Supply a human-readable value to friendlyTypeName
6. update \_toConfig to parse the Form object into the appropriate config
   - Appropriate config will be a stringified value that can be JSON.parse'd
7. Add a render option to the PreviewModal switch/case for the new ExportType enum


Note: Adapter previews currently require installing the target technology into this project