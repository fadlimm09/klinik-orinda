/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `receiver` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "receiver" TEXT NOT NULL,
ADD COLUMN     "sender" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";
