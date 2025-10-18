'use client';

import dynamic from 'next/dynamic';
import { BlockNoteView } from '@blocknote/shadcn';
import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/shadcn/style.css';

function ClientEditorComp() {
    const editor = useCreateBlockNote();
    return (
        <BlockNoteView
            editor={editor}
            shadCNComponents={
                {
                    // your overrides
                }
            }
        />
    );
}

// same file, no SSR → this won't touch the server bundle
const ClientEditor = dynamic(() => Promise.resolve(ClientEditorComp), {
    ssr: false,
});

export default ClientEditor;
export { ClientEditor as ClientEditorLazy, ClientEditorComp }; // optional named exports
