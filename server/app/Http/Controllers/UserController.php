<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function updatePassword(Request $request)
    {
        $user = Auth::user();

        Log::info('Update password request received.', [
            'user_id' => $user->id,
            'request_data' => $request->all()
        ]);

        $request->validate([
            'old_password' => 'required|string',
            'name' => 'required|string',
            'email' => 'required|email',
            'new_password' => 'required|string|min:5',
        ]);

        if ($user->name !== $request->name || $user->email !== $request->email) {
            Log::warning('Name or email does not match.', [
                'user_id' => $user->id,
                'request_name' => $request->name,
                'request_email' => $request->email
            ]);
            return response()->json(['message' => 'Name or email does not match.'], 400);
        }

        if (!Hash::check($request->old_password, $user->password)) {
            Log::warning('Old password is incorrect.', [
                'user_id' => $user->id
            ]);
            return response()->json(['message' => 'Old password is incorrect.'], 400);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        Log::info('Password updated successfully.', [
            'user_id' => $user->id
        ]);

        return response()->json(['message' => 'Password updated successfully.']);
    }
}
