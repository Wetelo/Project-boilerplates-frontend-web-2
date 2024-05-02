import { useDialog } from './common/managed-dialog/dialog.context';
import { Button } from './ui-kit/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui-kit/dialog';
import { Input } from './ui-kit/input';
import { Label } from './ui-kit/label';

const EditProfileDialog = () => {
  const { closeDialog } = useDialog();

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" defaultValue="@peduarte" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={closeDialog} type="button" variant="outline">
          Cancel
        </Button>
        <Button onClick={closeDialog} type="button">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default EditProfileDialog;
