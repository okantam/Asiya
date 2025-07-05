"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ImageModalProps {
  modalOpen: boolean;
  closeImageModal: () => void;
  selectedImage: string | null;
}

export default function ImageModal({
  modalOpen,
  closeImageModal,
  selectedImage,
}: Readonly<ImageModalProps>) {
  return (
    <Dialog open={modalOpen} onOpenChange={closeImageModal}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-5xl p-0 border-none bg-transparent overflow-hidden">
        <div className="relative">
          {selectedImage && (
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Enlarged artwork"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          )}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 rounded-full bg-white/50 hover:bg-white"
            onClick={closeImageModal}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
