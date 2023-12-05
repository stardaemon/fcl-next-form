-- CreateTable
CREATE TABLE "Batch" (
    "form_id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "batch_date" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "license_level" INTEGER NOT NULL,
    "comment_message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("form_id")
);
