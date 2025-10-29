"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import TopUpModal from "./modals/TopupModal";
import PublishModal from "./modals/PublishModal";

type PublishStatus = "draft" | "published" | "error";

interface PublishButtonProps {
  publishStatus: PublishStatus;
  setPublishOpen: (open: boolean) => void;
}

interface PaymentMenuProps {
    status: PublishStatus
}

export default function PaymentMenu() {
  const [topUpOpen, setTopUpOpen] = useState(false);
  const [publishOpen, setPublishOpen] = useState(false);
  const [status, setStatus] = useState<PublishStatus>("draft")

  const statusMap: Record<
    PublishStatus,
    { label: string; className: string; disabled?: boolean }
  > = {
    draft: {
      label: "Draft",
      className: "bg-muted hover:bg-muted/80 text-muted-foreground",
    },
    published: {
      label: "Published",
      className: "bg-purple-600 hover:bg-purple-700 text-white",
    },
    error: {
      label: "Failed",
      className: "bg-red-500 hover:bg-red-600 text-white",
    },
  };

  const pStatus = statusMap[status];

  return (
    <>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setTopUpOpen(true)}>
          Top Up
        </Button>
        <Button
          size="sm"
          onClick={() => setPublishOpen(true)}
          disabled={pStatus.disabled}
          className={
            `${pStatus.className} hover:cursor-pointer`
          }
        >
          {pStatus.label}
        </Button>
      </div>

      <TopUpModal open={topUpOpen} onOpenChange={setTopUpOpen} />
      <PublishModal
        open={publishOpen}
        onOpenChange={setPublishOpen}
        status={status}
        onStatusChange={setStatus}
      />
    </>
  );
}
