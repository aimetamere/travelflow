"use client";

import { useState, useEffect, FormEventHandler } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog";
import { UseRenameModal } from "@/store/use-rename-model";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
    const { 
        mutate, 
        pending,
    } = useApiMutation(api.board.update);

    const {
        isOpen,
        onClose,
        initialValues,
    } = UseRenameModal();

    const [title, SetTitle] = useState(initialValues.title);

    useEffect(() => {
        SetTitle(initialValues.title);
    }, [initialValues.title]);

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        mutate({
            id: initialValues.id,
            title,
        })
            .then(() => {
                toast.success("Board Renamed");
                onClose();
            })
            .catch(() => toast.error("Failed to rename board"));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit board title
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Enter a new title for this board
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                   <Input 
                    disabled={pending}
                    required
                    maxLength={60}
                    value={title}
                    onChange={(e) => SetTitle(e.target.value)}
                    placeholder="Board title"
                   /> 
                   <DialogFooter>
                    <DialogClose asChild>
                        <Button 
                            type="button"
                            variant="outline"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button disabled={pending} type="submit"> 
                        Save
                    </Button> 
                   </DialogFooter>
                </form> 
            </DialogContent>
        </Dialog>
    );
};